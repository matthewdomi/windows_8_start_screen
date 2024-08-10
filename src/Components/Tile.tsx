// components/Tiles.tsx
import Image from 'next/image';

interface Tile {
  id: string;
  image: string;
  title: string;
  backgroundColor: string;
}

interface TilesProps {
  tiles: Tile[];
}

const Tiles: React.FC<TilesProps> = ({ tiles }) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {tiles.map((tile) => (
        <div
          key={tile.id}
          className={`bg-[${tile.backgroundColor}] p-4 rounded-lg hover:scale-105 transition-transform`}
        >
          <Image src={tile.image} alt={tile.title} width={64} height={64} />
          <h3 className="mt-2 text-lg font-medium">{tile.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Tiles;