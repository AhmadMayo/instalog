"use client";

interface Props {
  setSearchTerm: (term: string) => void;
}

export default function Toolbar({ setSearchTerm }: Props) {
  return (
    <div className="bg-zinc-100 px-4 pt-4">
      <input
        className="
          w-full rounded-lg
          border-[1px]
          border-zinc-200 bg-transparent p-3
        placeholder:text-zinc-400
        "
        placeholder="Search name, email or action..."
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
}
