import { Document } from "@context/app/types";

export enum SortOption {
  created_new = "created_new",
  created_old = "created_old",
  updated_new = "updated_new",
  updated_old = "updated_old",
}

export const sortOptions = [
  { label: "Created (new first)", value: SortOption.created_new },
  { label: "Created (old first)", value: SortOption.created_old },
  { label: "Updated (new first)", value: SortOption.updated_new },
  { label: "Updated (old first)", value: SortOption.updated_old },
];

export const sortDocuments = (
  documents: Document[],
  sortOption: SortOption,
) => {
  if (sortOption === SortOption.created_new) {
    return documents.sort((a, b) => {
      const dateA = new Date(a.CreatedAt);
      const dateB = new Date(b.CreatedAt);
      return dateB.getTime() - dateA.getTime();
    });
  }
  if (sortOption === SortOption.created_old) {
    return documents.sort((a, b) => {
      const dateA = new Date(a.CreatedAt);
      const dateB = new Date(b.CreatedAt);
      return dateA.getTime() - dateB.getTime();
    });
  }
  if (sortOption === SortOption.updated_new) {
    return documents.sort((a, b) => {
      const dateA = new Date(a.UpdatedAt);
      const dateB = new Date(b.UpdatedAt);
      return dateB.getTime() - dateA.getTime();
    });
  }
  if (sortOption === SortOption.updated_old) {
    return documents.sort((a, b) => {
      const dateA = new Date(a.UpdatedAt);
      const dateB = new Date(b.UpdatedAt);
      return dateA.getTime() - dateB.getTime();
    });
  }

  return documents;
};
