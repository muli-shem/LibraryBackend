CREATE TABLE IF NOT EXISTS "Books" (
	"id" serial PRIMARY KEY NOT NULL,
	"Title" varchar(400) NOT NULL,
	"Author" varchar(400) NOT NULL,
	"Year" varchar(400) NOT NULL
);
