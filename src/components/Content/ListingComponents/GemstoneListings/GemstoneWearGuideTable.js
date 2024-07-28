import React from 'react'
import {GemstoneWearGuideTableBox} from './style'

export default function GemstoneWearGuideTable({filteredStoneForTableData}) {

    return (
        <GemstoneWearGuideTableBox>
            <div className='guide-table'>
                <table>
                    <tbody>
                        <tr>
                            <th>Weight:</th>
                            <td>{filteredStoneForTableData.tableData.weight}</td>
                        </tr>
                        <tr>
                            <th>Color:</th>
                            <td>{filteredStoneForTableData.tableData.color}</td>
                        </tr>
                        <tr>
                            <th>Metal:</th>
                            <td>{filteredStoneForTableData.tableData.metal}</td>
                        </tr>
                        <tr>
                            <th>Finger:</th>
                            <td>{filteredStoneForTableData.tableData.finger}</td>
                        </tr>
                        <tr>
                            <th>Day & Time:</th>
                            <td>{filteredStoneForTableData.tableData.dayAndTime}</td>
                        </tr>
                        <tr>
                            <th>Mantra:</th>
                            <td>{filteredStoneForTableData.tableData.mantra}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </GemstoneWearGuideTableBox>
    )
}