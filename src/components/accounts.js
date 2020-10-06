import React from 'react';

const posColour = (pos) => {
    if (pos === 0) {
        return "FFFFFF";
    }
    if (pos < 0) {
        return "F8C2C2";
    }
    return "ADF1C9";
};

const Accounts = ({ accounts, instruments }) => {
    return (
        <table className="table table-striped table-hover" style={{tableLayout: "fixed"}}>
            <tbody>
                <tr>
                    <th scope="row">Name</th>
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
                        <th scope="row">Event {instrument.display_order}</th>
                        {accounts.map((account) => (
                            <td style={{textAlign: "center"}}>{account.positions[instrument.display_order]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default Accounts;