import PropTypes from "prop-types"; // For prop validation

function PageTable({
  tableData = [], // Array of rows
  tableHeaders = [], // Array of header labels
  visibleColumns = [], // Columns to show
  onRowClick, // Callback for row click
  renderActions, // Custom render function for row actions
  fixedRowData = null, // Data for a fixed row (e.g., totals)
}) {

  return (
    <div className="Page-Table-Content">
      <div className="Table-Inner">
        <table>
          <thead>
            <tr>
              {tableHeaders.map((header, index) =>
                visibleColumns.includes(header) ? (
                  <th key={index}>{header}</th>
                ) : null
              )}
              {renderActions && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => onRowClick && onRowClick(row, rowIndex)}
                style={{ cursor: onRowClick ? "pointer" : "default" }}
              >
                {row.map((value, colIndex) =>
                  visibleColumns.includes(tableHeaders[colIndex]) ? (
                    <td key={colIndex}>{value}</td>
                  ) : null
                )}
                {renderActions && (
                  <td className="fixed-column">{renderActions(row)}</td>
                )}
              </tr>
            ))}
            {fixedRowData && (
              <tr className="Fixed-Row">
                {fixedRowData.map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

PageTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.array).isRequired, // Rows as arrays
  tableHeaders: PropTypes.arrayOf(PropTypes.string).isRequired, // Column headers
  visibleColumns: PropTypes.arrayOf(PropTypes.string).isRequired, // Columns to show
  onRowClick: PropTypes.func, // Row click callback
  renderActions: PropTypes.func, // Function to render custom actions for rows
  fixedRowData: PropTypes.array, // Data for fixed row at the bottom
};

export default PageTable;
