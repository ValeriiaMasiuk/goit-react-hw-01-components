import PropTypes from 'prop-types';
import {TransactionsTable, TableData, TableHeader, TableHeaderRow, HeaderName, TableBody, TableBodyRow} from './Operastions.styled'

export default function TransactionHistory({items}) {
    return (
        <TransactionsTable>
            <TableHeader>
                <TableHeaderRow>
                    <HeaderName>Type</HeaderName>
                    <HeaderName>Amount</HeaderName>
                    <HeaderName>Currency</HeaderName>
                </TableHeaderRow>
            </TableHeader>
            {items.map(item => (
                <TableBody key={item.id}>
                    <TableBodyRow>
                        <TableData>{item.type}</TableData>
                        <TableData>{item.amount}</TableData>
                        <TableData>{item.currency}</TableData>
                    </TableBodyRow>
                </TableBody>)
            
            )}
        </TransactionsTable>
)
}

TransactionHistory.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
}
