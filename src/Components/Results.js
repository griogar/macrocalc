import React from 'react';
import { Table } from 'react-bootstrap';

export const Results = (props) => {
    const tdee = props.bmr * parseFloat(props.multiplier);
    const goalCals = (tdee * props.goal);
    let carbCals = (goalCals - (props.weight * 4)) * 0.5
    let fatCals = (goalCals - (props.weight * 4)) * 0.5


    if (props.goal === 1.2) {
        carbCals = (goalCals - (props.weight * 4)) * 0.7
        fatCals = (goalCals - (props.weight * 4)) * 0.3
    }

    return (
        <>
            <h2>Results:</h2>
            <Table size="sm">
                <thead>
                    <tr>
                        <th>Today's Calories</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Minimum Calories (BMR)</td>
                        <td>{Math.round(props.bmr)}</td>
                    </tr>
                    <tr>
                        <td>Total Daily Expenditure (TDEE)</td>
                        <td>{Math.round(goalCals)}</td>
                    </tr>
                </tbody>
            </Table>
            <hr />
            <Table size="sm">
                <thead>
                    <tr>
                        <th>Macro Split</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Macro</td>
                        <td>Grams</td>
                        <td>Calories</td>
                    </tr>
                    <tr>
                        <td>Protein</td>
                        <td>{props.weight}</td>
                        <td>{props.weight * 4}</td>
                    </tr>
                    <tr>
                        <td>Carbohydrate</td>
                        <td>{Math.round(carbCals / 4)}</td>
                        <td>{Math.round(carbCals)}</td>
                    </tr>
                    <tr>
                        <td>Fat</td>
                        <td>{Math.round(fatCals / 9)}</td>
                        <td>{Math.round(fatCals)}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}