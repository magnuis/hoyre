interface SortMenuProps {
  sort: string
  setSort: (sort: string) => void
}

export default function SortMenu({ sort, setSort }: SortMenuProps) {
  return (
    <div className="w-fit max-w-lg h-16">
      {/* <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
        Sortering
      </label> */}

      <select
        id="sort"
        name="sort"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="p-2 pr-10 block w-fulltext-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
      >
        <option value="desc">Nyeste først</option>
        <option value="asc">Eldste først</option>
      </select>
    </div>
  )
}
