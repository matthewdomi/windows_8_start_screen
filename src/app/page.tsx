import Image from "next/image";
import Tiles from "@/Components/Tile";
import tiles from "@/Utils/DataTiles"; 


export default function Home() {
  return (
    <main
     className="flex min-h-screen flex-col items-center justify-between p-24"
     >
<Tiles tiles={tiles} />

    </main>
  );
}
