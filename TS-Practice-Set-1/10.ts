/*
Task 10: Nullish Coalescing
Objective: Handle null and undefined values using nullish coalescing.

Instructions:

Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined.
*/

const getDisplayName = (name: string | null | undefined): string => {
    return name ?? "Anonymous";
}

console.log(getDisplayName(undefined));