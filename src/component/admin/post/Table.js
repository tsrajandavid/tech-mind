import React from 'react'
import { useTable, usePagination } from 'react-table'

export default function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 2 },
        },
        usePagination
    )
    return (
        <>

            <table {...getTableProps()} className="table">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* 
          Pagination can be built however you'd like. 
          This is just a very basic UI implementation:
        */}
            <div className="pagination navigation default">
                <div className="pagination left">
                    <button className="gotoPage" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        <i class="bi bi-chevron-double-left"></i>
                    </button>{' '}
                    <button className="previousPage" onClick={() => previousPage()} disabled={!canPreviousPage}>
                        <i class="bi bi-chevron-left"></i>
                    </button>{' '}
                    <button className="nextPage" onClick={() => nextPage()} disabled={!canNextPage}>
                        <i class="bi bi-chevron-right"></i>
                    </button>{' '}
                    <button className="gotoPage" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        <i class="bi bi-chevron-double-right"></i>
                    </button>{' '}

                </div>
                <div className="pagination right">
                    <select
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                    >
                        {[10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}
