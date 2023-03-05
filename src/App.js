import { useState, useEffect } from "react";

function App() {
  const [tables, setTables] = useState(
    [
      [
        {
          value: '1',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '2',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '3',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '3',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '3',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '3',
          cols: 1,
          rows: 1,
          selected: false
        },
      ],
      [
        {
          value: '4',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '5',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '6',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '3',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '3',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '3',
          cols: 1,
          rows: 1,
          selected: false
        },
      ],
      [
        {
          value: '4',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '5',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '6',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '3',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '3',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '3',
          cols: 1,
          rows: 1,
          selected: false
        },
      ],
      [
        {
          value: '4',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '5',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '6',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '3',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '3',
          cols: 1,
          rows: 1,
          selected: false
        },
        {
          value: '3',
          cols: 1,
          rows: 1,
          selected: false
        },
      ],
    ]
  )

  const _onClickBox = (index, colIndex) => {
    const cloneTables = [...tables]
    const row = cloneTables[index]
    const col = row[colIndex]
    col.selected = !col.selected
    setTables([...cloneTables])

  }

  const _onMerge = () => {
    let mergeAlready = false
    const _getActiveArr = (el) => {
      const findOne = el.find(el => el.selected)
      if (findOne) return true;
      return false
    }
    const findOne = tables.findIndex(_getActiveArr)

    const countSelectedRow = tables[findOne].filter(el => el.selected === true)

    const cloneTables = [...tables]
    const rows = cloneTables[findOne]

    const findFirstIndexOfSelectedRow = rows.findIndex(el => el.selected === true)


    let rowSplice = rows.splice(findFirstIndexOfSelectedRow, countSelectedRow.length - 1)
    rows[findFirstIndexOfSelectedRow].cols = countSelectedRow.length

    if (rowSplice.length > 1) {
      mergeAlready = true
    }


    if (rowSplice.length === 0 && mergeAlready === false) {
      const nextRow = tables[findOne + 1]

      let mergeColCount = 2
      let skipMerge = false

      if (nextRow[findFirstIndexOfSelectedRow].selected === true) {
        tables.forEach(el => {
          if (el[findFirstIndexOfSelectedRow].selected === true && skipMerge === false) {
            //
          } else {
            skipMerge = true
          }
        })


        rows[findFirstIndexOfSelectedRow].rows = mergeColCount
        cloneTables[findOne + 1].splice(findFirstIndexOfSelectedRow, 1)
      }
    }

    rows[findFirstIndexOfSelectedRow].selected = false
    setTables([...cloneTables])
  }

  return (
    <div>
      <div>Hello world</div>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <tbody>
          {
            tables.map((data, index) => {
              return (
                <tr style={{ border: '1px solid black' }} key={index}>
                  {
                    data.map((col, colIndex) => {
                      return (
                        <td style={{ border: '1px solid black', padding: 10, backgroundColor: col.selected ? '#09f' : '#FFF' }} key={colIndex} onClick={() => _onClickBox(index, colIndex)} colSpan={col.cols} rowSpan={col.rows}>
                          Hello 1
                        </td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <button onClick={_onMerge}>Merge</button>
    </div>
  );
}

export default App;
