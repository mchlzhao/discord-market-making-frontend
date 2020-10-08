import React from 'react';

const posToPillClass = (pos) => {
    if (pos < 0) return "badge-danger";
    if (pos > 0) return "badge-success";
    return "";
};

const Accounts = ({ accounts, instruments }) => {
    return (
        <table className="table table-dark table-striped table-hover" style={{tableLayout: "fixed"}}>
            <tbody>
                <tr>
                    <th scope="row" style={{width: "25%"}}>Name</th>
                    {accounts.map((account) => (
                        <td style={{textAlign: "center"}}><b>{account.name}</b></td>
                    ))}
                </tr>
                <tr>
                    <th scope="row">Balance</th>
                    {accounts.map((account) => (
                        <td style={{textAlign: "center"}}>{account.balance}</td>
                    ))}
                </tr>
                {instruments.map((instrument) => (
                    <tr>
                        <th className="text-truncate" scope="row">
                            <small>{instrument.display_order}. {instrument.desc}</small>
                        </th>
                        {accounts.map((account) => (
                            <td style={{padding: "0", verticalAlign: "middle", textAlign: "center"}}>
                                <h5 className="m-0">
                                    <span className={"badge badge-pill " + posToPillClass(account.positions[instrument.display_order])} style={{minWidth: "2rem"}}>
                                    {Math.abs(account.positions[instrument.display_order])}
                                    </span>
                                </h5>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default Accounts;