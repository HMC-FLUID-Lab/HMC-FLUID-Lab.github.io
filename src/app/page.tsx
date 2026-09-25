import { PIProfile } from "@/components/PIProfile";

// The site opens straight onto Bilin's profile; /bilin serves the same page
// so older links keep working.
export default function Home() {
  return (
    <div className="container-narrow py-10 lg:py-16">
      <PIProfile />
    </div>
  );
}
