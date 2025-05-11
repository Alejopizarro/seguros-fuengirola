import { Check } from "lucide-react";

interface TableItem {
  title: string;
  bullet: {
    title: string;
    description: string;
  }[];
}

interface TableProps {
  title: string;
  description: string;
  tables: TableItem[];
}

const Table = (props: TableProps) => {
  const { title, description, tables } = props;

  return (
    <div className="flex flex-col items-center gap-y-8  p-8">
      <h2 className="text-2xl lg:text-3xl text-center">{title}</h2>
      <p className="text-md font-light text-gray-500 text-center">
        {description}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white p-8 rounded-xl shadow-lg">
        {tables.map((table, i) => (
          <div key={i} className="flex flex-col rounded-xl ">
            <h4 className="text-xl lg:text-2xl font-semibold text-gray-950 mb-4">
              {table.title}
            </h4>
            <ul className="flex flex-col space-y-8 p-4 bg-gray-200 rounded-xl shadow-md">
              {table.bullet.map((bullet, i) => (
                <li key={i}>
                  <p className="text-lg lg:text-xl flex items-center gap-x-2 mb-4 font-medium text-gray-950">
                    <Check color="green" />
                    {bullet.title}
                  </p>
                  <p className="text-sm font-light text-gray-500">
                    {bullet.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
