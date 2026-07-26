import { useEffect, useState } from 'react';
import { WARDS } from '../lib/wards';

const SECTORS = ['All', 'Education', 'Health', 'Roads', 'Water', 'Markets', 'Administration'];

interface Props {
  tableId: string;
  totalCount: number;
}

function getInitialSector(): string {
  if (typeof window === 'undefined') return 'All';
  const param = new URLSearchParams(window.location.search).get('sector');
  return param && SECTORS.includes(param) ? param : 'All';
}

function getInitialWard(): string {
  if (typeof window === 'undefined') return 'All';
  const param = new URLSearchParams(window.location.search).get('ward');
  return param && WARDS.some((w) => String(w.number) === param) ? param : 'All';
}

export default function RecordFilter({ tableId, totalCount }: Props) {
  const [sector, setSector] = useState(getInitialSector);
  const [ward, setWard] = useState(getInitialWard);
  const [visibleCount, setVisibleCount] = useState(totalCount);

  useEffect(() => {
    const table = document.getElementById(tableId);
    if (!table) return;
    const rows = Array.from(table.querySelectorAll('tbody tr')) as HTMLTableRowElement[];
    let count = 0;
    for (const row of rows) {
      const sectorMatch = sector === 'All' || row.dataset.sector === sector;
      const wardMatch = ward === 'All' || row.dataset.ward === ward;
      const show = sectorMatch && wardMatch;
      row.style.display = show ? '' : 'none';
      if (show) count += 1;
    }
    setVisibleCount(count);
  }, [sector, ward, tableId]);

  return (
    <div className="filter-bar">
      <div className="filter-chips" role="group" aria-label="Filter by sector">
        {SECTORS.map((s) => (
          <button
            key={s}
            type="button"
            className="filter-chip"
            aria-pressed={sector === s}
            onClick={() => setSector(s)}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="filter-ward">
        <label htmlFor="ward-filter" className="visually-hidden">
          Filter by ward
        </label>
        <select id="ward-filter" value={ward} onChange={(e) => setWard(e.target.value)}>
          <option value="All">All wards</option>
          {WARDS.map((w) => (
            <option key={w.number} value={String(w.number)}>
              Ward {w.number} ({w.name})
            </option>
          ))}
        </select>
      </div>
      <p className="filter-count" aria-live="polite">
        Showing {visibleCount} of {totalCount} loaded entries
      </p>
    </div>
  );
}
