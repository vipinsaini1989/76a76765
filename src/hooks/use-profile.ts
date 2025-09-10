import { useEffect, useState } from "react";
import matter from 'front-matter';
import { marked } from "marked";
import type { ProfileData } from "../types/profile";

export function useProfile() {
  const [data, setData] = useState<ProfileData | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const base = import.meta.env.BASE_URL;
        const url = `${base}content/profile.md`
        const res = await fetch(url);
        if (!res.ok)
          throw new Error(`Failed to fetch profile.md: ${res.status}`);
        const text = await res.text();

        const md = matter(text);
        const fm = md.attributes as any;

        const aboutHtml = md.body
          ? (marked.parse(md.body) as string)
          : "";

        setData({
          name: fm.name || "",
          title: fm.title || "",
          company: fm.company || "",
          location: fm.location || "",
          avatar: fm.avatar || "",
          aboutHtml,
          contact: fm.contact || {},
          links: fm.links || [],
          skills: fm.skills || [],
          experience: fm.experience || [],
          education: fm.education || [],
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return { data, error, isLoading };
}
