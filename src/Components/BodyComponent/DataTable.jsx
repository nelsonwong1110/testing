import ReactDataGrid from 'react-data-grid';
import React, {Component} from 'react';

class DataTable extends Component{


    constructor(props, context) {
        super(props, context);
        // this.createRows();
        this._columns = [
            { key: 'id', name: 'ID' },
            { key: 'title', name: 'Title' },
            { key: 'count', name: 'Count' } ];

        this.state = null;
        }



        // render() {
        //     return (
        //       <div>
        //         Homemateeee
        //       </div>
        //     )
        //   }

        // createRows = () => {
        //     let rows = [];
        //     for (let i = 1; i < 1000; i++) {
        //         rows.push({
        //         id: i,
        //         title: 'Title ' + i,
        //         count: i * 1000
        //         });
        //     }
        //     this._rows = rows;
        // };

        rowGetter = (i) => {
        return this._rows[i];
        };
    render (){
        return  (
            <ReactDataGrid
              columns={this._columns}
              rowGetter={this.rowGetter}
              rowsCount={this._rows.length}
              minHeight={500} />
            )
    }

    
}
export default DataTable;