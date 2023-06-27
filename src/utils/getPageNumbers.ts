import { SITE } from "@/config";

const getPageNumbers = (numberOfPosts: number) => {
  const numberOfPages = Math.ceil(numberOfPosts / Number(SITE.postPerPage));
  return Array.from({ length: numberOfPages }, (_, i) => i + 1);
};

export default getPageNumbers;
