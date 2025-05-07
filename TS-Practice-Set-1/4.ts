/*
Task 4: Union and Intersection Types
Objective: Create union and intersection types using interfaces.

Instructions:

Define interfaces Book and Magazine.
Create:
A type that is a union of Book and Magazine.
A type that is an intersection of Book and Magazine.
*/

interface Book {

}

interface Magazine {

}

type UnionBookMagazine = Book | Magazine;
type IntersectBookMagazine = Book & Magazine;