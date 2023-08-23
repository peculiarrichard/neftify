import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Documentation = () => {
  const columnA = [
    { id: "property", label: "PROPERTY", minWidth: 170 },
    { id: "attribute", label: "ATTRIBUTE", minWidth: 100 },
    { id: "description", label: "DESCRIPTION", minWidth: 100 },
    { id: "type", label: "TYPE", minWidth: 100 },
    { id: "defaul", label: "DEFAULT", minWidth: 100 },
  ];

  const columnB = [
    { id: "event", label: "EVENT", minWidth: 170 },
    { id: "description", label: "DESCRIPTION", minWidth: 100 },
    { id: "type", label: "TYPE", minWidth: 100 },
  ];

  const columnC = [
    { id: "method", label: "METHOD", minWidth: 170 },
    { id: "description", label: "DESCRIPTION", minWidth: 100 },
    { id: "type", label: "TYPE", minWidth: 100 },
  ];

  function createData(property, attribute, description, type, defaul) {
    return { property, attribute, description, type, defaul };
  }

  function createDataB(event, description, type) {
    return { event, description, type };
  }

  function createDataC(method, description, type) {
    return { method, description, type };
  }

  const rowsA = [
    createData(
      "isDark",
      "is-dark",
      "Enables the dark-mode theme",
      "boolean",
      "false"
    ),
    createData(
      "isHidden",
      "is-hidden",
      "Hides the neftify button and modal components",
      "boolean",
      "false"
    ),
    createData(
      "noModal",
      "no-modal",
      "Prevents the modal from opening up, the connect button gets triggered via custom connection on neftifyConnectButtonClick",
      "boolean",
      "false"
    ),
    createData(
      "showEmoji",
      "show-emoji",
      "Shows the emoji of the connected button",
      "boolean",
      "false"
    ),
  ];

  const rowsB = [
    createDataB(
      "neftifyConnectButtonClick",
      "Gets fired whenever the user has clicked on the connect button",
      "CustomEvent<any>"
    ),
    createDataB(
      "neftifyDisconnectButtonClick",
      "Gets fired whenever the user has clicked on the disconnect button",
      "CustomEvent<any>"
    ),
    createDataB(
      "neftifyUserHasConnected",
      "Gets fired whenever the user has connected their wallet",
      "CustomEvent<any>"
    ),
    createDataB(
      "neftifyUserHasDisconnected",
      "Gets fired whenever the user has disconnected their wallet",
      "CustomEvent<any>"
    ),
  ];

  const rowsC = [
    createDataC(
        "connect()",
        "Helper method allowing to execute a manual wallet connection",
        "Promise<void>"
    ),
    createDataC(
        "disconnect()",
        "Helper method allowing to execute a manual wallet disconnection",
        "Promise<void>"
    ),
    createDataC(
        "getBalance()",
        "Helper method to get the user's balance in wei",
        "Promise<{wei: string; eth: string; }>"
    ), 
    createDataC(
        "getConnectionDetails()",
        "...",
        "Promise<{ address: string; networkId: number; provider: ethers.providers.Web3Provider; balance: BigNumber; }>"
    ),
    createDataC(
        "getSigner()",
        "Helper method to get the contract signer",
        "Promise<any>"
    ),
    createDataC(
        "userIsConnected()",
        "Helper method to get the user's connection state.",
        "Promise<boolean>"
    )
  ]
  return (
    <>
      <section className="w-[90%] max-w-7xl m-auto ">
        <div className="w-full lg:w-[85%] m-auto">
            <div className="flex justify-between items-center">
                <p className="text-gray-900 text-[1.2rem]">Properties</p>
                <button className="bg-gray-800 text-gray-200 text-[0.9rem] font-semibold py-2 px-4 rounded-2xl">Open playground</button>
            </div>
          <Paper
            sx={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "1rem",
              margin: "auto",
              overflow: "auto",
              marginBottom: "2rem",
              marginTop: "1.5rem",
            }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columnA.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          backgroundColor: "#f9fafb",
                          color: "black",
                          fontWeight: "bold",
                          height: "20px",
                        }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsA.map((row) => {
                    return (
                      <TableRow
                        role="checkbox"
                        tabIndex={-1}
                        key={row.property}>
                        {columnA.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              sx={{
                                color: "rgb(107 114 128)",
                                fontSize: "13px",
                                fontFamily: "monospace",
                              }}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <p className="text-gray-900 text-[1.2rem]">Events</p>
           <Paper
            sx={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "1rem",
              margin: "auto",
              overflow: "auto",
              marginBottom: "2rem",
              marginTop: "1.5rem",
            }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columnB.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          backgroundColor: "#f9fafb",
                          color: "black",
                          fontWeight: "bold",
                          height: "20px",
                        }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsB.map((row) => {
                    return (
                      <TableRow
                        role="checkbox"
                        tabIndex={-1}
                        key={row.property}>
                        {columnB.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              sx={{
                                color: "rgb(107 114 128)",
                                fontSize: "13px",
                                fontFamily: "monospace",
                              }}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <p className="text-gray-900 text-[1.2rem]">Methods</p>
          <Paper
            sx={{
              width: "100%",
              overflow: "auto",
              borderRadius: "1rem",
              margin: "auto",
             
              marginBottom: "2rem",
              marginTop: "1.5rem",
            }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columnC.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          backgroundColor: "#f9fafb",
                          color: "black",
                          fontWeight: "bold",
                          height: "20px",
                        }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsC.map((row) => {
                    return (
                      <TableRow
                        role="checkbox"
                        tabIndex={-1}
                        key={row.property}>
                        {columnC.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              sx={{
                                color: "rgb(107 114 128)",
                                fontSize: "13px",
                                fontFamily: "monospace",
                              }}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </section>
    </>
  );
};

export default Documentation;
