import axios from "axios";
import * as cheerio from "cheerio";

export const urlPattern =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
function cleanText(text: string): string {
    return text.replace(/\s+/g, " ").replace(/\n+/g, " ").trim();
}
// Function to scrape content from a URL
export async function scrapeUrl(url: string) {
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
  
      // Remove script tags, style tags, and comments
      $("script").remove();
      $("style").remove();
      $("noscript").remove();
      $("iframe").remove();
  
      // Extract useful information
      const title = $("title").text();
      const metaDescription = $(`meta[name="description"]`).attr("content") || "";
      const h1 = $("h1")
        .map((_, el) => $(el).text())
        .get()
        .join(" ");
      const h2 = $("h2")
        .map((_, el) => $(el).text())
        .get()
        .join(" ");
  
      // Get text from important elements
      const articleText = $("article")
        .map((_, el) => $(el).text())
        .get()
        .join(" ");
  
      const mainText = $("main")
        .map((_, el) => $(el).text())
        .get()
        .join(" ");
  
      const contentText = $(".content, #content, [class*='content']")
        .map((_, el) => $(el).text())
        .get()
        .join(" ");
  
      // Get all paragraph text
      const paragraphs = $("p")
        .map((_, el) => $(el).text())
        .get()
        .join(" ");
  
      // Get list items
      const listItems = $("li")
        .map((_, el) => $(el).text())
        .get()
        .join(" ");
  
      // Combine all content
      let combinedContent = [
        title,
        metaDescription,
        h1,
        h2,
        articleText,
        mainText,
        contentText,
        paragraphs,
        listItems,
      ].join(" ");
      // Clean and truncate the content
      combinedContent = cleanText(combinedContent).slice(0,40000);
      return {
        url,
        title: cleanText(title),
        headings: {
          h1: cleanText(h1),
          h2: cleanText(h2),
        },
        metaDescription: cleanText(metaDescription),
        content: combinedContent,
        error: null,
      };
    } catch (error) {
      console.error(`Error scraping ${url}:`, error);
      return {
        url,
        title: "",
        headings: { h1: "", h2: "" },
        metaDescription: "",
        content: "",
        error: "Failed to scrape URL",
      };
    }
  }
  