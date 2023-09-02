
import { MaterialReactTable } from 'material-react-table';
import React, { useMemo } from 'react';

const PaginationCMP = () => {
    const columns = useMemo(
        () => [
          {
            accessorKey: 'firstName',
            header: 'First Name',
          },
          {
            accessorKey: 'lastName',
            header: 'Last Name',
          },
          //column definitions...
          {
            accessorKey: 'state',
            enableColumnOrdering: false, //disable column ordering for this column,
            header: 'State',
          },
        ],
        [],
      );
  return (
    <div>
     <MaterialReactTable columns={columns}  enableColumnOrdering />
    </div>
  );
};

export default PaginationCMP;