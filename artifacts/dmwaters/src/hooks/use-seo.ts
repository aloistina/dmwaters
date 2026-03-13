import { useEffect } from "react";

export function useSEO(title: string, description?: string) {
  useEffect(() => {
    // Set the document title
    document.title = `${title} | DM Waters - Bulk Water Delivery Harare Zimbabwe`;

    // Set the meta description
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description]);
}
