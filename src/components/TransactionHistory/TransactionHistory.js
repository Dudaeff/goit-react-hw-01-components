import PropTypes from 'prop-types';
import { Body, Head, Heading, Info, InfoRow, Table } from "./TransactionHistory,styled";

export const TransactionTable = ({ items }) => {
    return (<Table>
        <Head>
            <tr>
                <Heading>Type</Heading>
                <Heading>Amount</Heading>
                <th>Currency</th>
            </tr>
        </Head>

        <Body>
            {items.map(({id,type, amount, currency})=>{
                return (<InfoRow key={id}>
                    <Info>{type }</Info>
                    <Info>{amount }</Info>
                    <Info>{currency }</Info>
                </InfoRow>)  
            })}
        </Body>
    </Table>)
};

TransactionTable.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}