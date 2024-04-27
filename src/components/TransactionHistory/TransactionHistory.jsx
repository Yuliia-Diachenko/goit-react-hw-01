
function TransactionHistory({items:{id, type, amount, currency}}){
return (
<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item => 
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )} 
    </tbody>
</table>

)}
export default TransactionHistory;