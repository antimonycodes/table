import { useState } from "react";
function App() {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(12);
  const [rows, setRows] = useState([]);

  const generateTable = (start, end) => {
    const newRows = [];
    // Add a header row dynamically based on input range
    const headerRow = [
      <th
        key="header-0"
        className="px-4 py-2 text-gray-700 border border-gray-300"
      >
        x
      </th>,
    ];
    for (let i = start; i <= end; i++) {
      headerRow.push(
        <th
          key={`header-${i}`}
          className="px-4 py-2 text-gray-700 border border-gray-300"
        >
          {i}
        </th>
      );
    }
    newRows.push(<tr key="header">{headerRow}</tr>);

    for (let num = start; num <= end; num++) {
      const tableRow = [];
      // Add a header cell for each row
      tableRow.push(
        <th
          key={`row-header-${num}`}
          className="px-4 py-2 text-gray-700 border border-gray-300"
        >
          {num}
        </th>
      );
      for (let i = start; i <= end; i++) {
        const result = num * i;
        tableRow.push(
          <td
            key={`${num}-${i}`}
            className="px-4 py-2 text-gray-700 border border-gray-300"
          >
            {result}
          </td>
        );
      }
      newRows.push(
        <tr key={num} className="bg-gray-50 hover:bg-gray-100">
          {tableRow}
        </tr>
      );
    }
    setRows(newRows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateTable(Number(start), Number(end));
  };
  return (
    <>
      <div className=" bg-fuchsia-400 text-center text-3xl">
        <h1>MULTIPLICATION TABLE</h1>
      </div>
      <div className="p-4 bg-fuchsia-400 flex gap-3 w-full ">
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="number"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="mr-2 border-2 mb-4"
            placeholder="Start from"
          />
          <input
            type="number"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="mr-2 border-2 mb-4"
            placeholder="End at"
          />
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-800 block"
          >
            Generate Table
          </button>
        </form>
        <table className="w-full table-auto">
          <thead className="bg-gray-200">
            {rows.length > 0 ? rows[0] : null}
          </thead>
          <tbody>{rows.slice(1)}</tbody>
        </table>
      </div>
    </>
  );
}

export default App;
