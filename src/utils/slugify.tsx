
export default function slugify (name:string) :string {
    return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g,"-");
}