import React, { useState, createContext, useContext, useEffect } from 'react';
import ItemsForm from './ItemsForm';
import { tellUser } from '../Helper';
import { MainContext } from '../App';


export const NewIncomeContext = createContext(null);

export default function Component(props) {

  const mainContext = useContext(MainContext);

  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ date, setDate ] = useState(new Date().toISOString().substr(0, 10));
  const [ amountTobeReceived, setAmountTobeReceived ] = useState(0);
  const [ amountReceived, setAmountReceived ] = useState(0);
  const [ triggerEncode, setTriggerEncode ] = useState(false);
  const [ isDebt, setIsDebt ] = useState(false);
  const [ tableItems, setTableItems ] = useState([]);
  const [ loading, setLoading ] = useState(false);


  const handleAmountTobeReceived = (value) => {
    if(tableItems.length === 0) {
      if(!isNaN(value) && Number(value) >= 0) {
        setAmountTobeReceived(value);
      }
      else {
        tellUser('Invalid amount');
      }
    }
    else {
      tellUser('You cannot use this option if you have created a table. To fill it manually please delete all table rows');
    }
  }

  const handleAmountReceived = (value) => {
    if(!isNaN(value) && Number(value) >= 0) {
      setAmountReceived(value);
    }
    else {
      tellUser('Invalid amount');
    }
  }

  const encodeTableItems = () => {
    let tableItems = document.getElementsByClassName('incomeTableItem');
    let items = [];
    for(let i = 0; i < tableItems.length; i++) {

      let item = {
        particular: tableItems[i].children[0].children[0].children[0].children[0].children[1].value,
        unit: tableItems[i].children[0].children[0].children[1].children[0].children[1].value,
        quantity: tableItems[i].children[0].children[0].children[2].children[0].children[1].value,
        unitPrice: tableItems[i].children[0].children[0].children[3].children[0].children[1].value,
        subTotal: tableItems[i].children[0].children[0].children[4].children[0].children[1].value,
      }

      items.push(item);

    }
    setTableItems(items);
  }

  const sumTableItems = () => {
    let sum = 0;
    tableItems.forEach((item, i) => {
      sum += Number(item.subTotal);
    });
    setAmountTobeReceived(sum);
  }

  const saveIncome = async () => {
    if(!loading) {
      if(title.trim().length > 0) {
        if(date.trim().length > 0) {
          if(amountTobeReceived > 0) {
            setLoading(true);
            await MainContext.QA.saveIncome({
              title,
              description,
              date,
              amountTobeReceived,
              amountReceived,
              tableItems,
            }).then((status, msg) => {
              setLoading(false);
              if(status === 1) {
                tellUser('Income Record was saved');
                mainContext.clearModal();
              }
              else {
                tellUser(msg);
              }
            })
          }
          else {
            tellUser("Please 'Amount To Be Received' cannot be 0");
          }
        }
        else {
          tellUser("Please specify income record 'Date'");
        }
      }
      else {
        tellUser("Please specify income record 'Title'");
      }
    }
  }

  useEffect(() => {
    if(Number(amountTobeReceived) > Number(amountReceived)) {
      setIsDebt(true);
    }
    else {
      setIsDebt(false);
    }
  }, [ amountTobeReceived, amountReceived ])

  useEffect(() => {
    encodeTableItems();
  }, [ triggerEncode ]);

  useEffect(() => {
    sumTableItems()
  }, [ tableItems ]);



  const newIncomeContext = {
    setAmountTobeReceived,
    setAmountReceived,
    amountTobeReceived,
    amountReceived,
    triggerEncode,
    setTriggerEncode,
    tableItems,
    setTableItems,
  }
  return (
    <NewIncomeContext.Provider value={newIncomeContext}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h4>Basic Information</h4>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <label>Title</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" type="text"/>
            </div>
            <div className="form-group">
              <label>Description & Info (Optional)</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control"></textarea>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input value={date} onChange={(e) => setDate(e.target.value)} className="form-control" type="date"/>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="form-group">
              <label>Total Amount To be Received</label>
              <input value={amountTobeReceived} onChange={(e) => handleAmountTobeReceived(e.target.value) } className="form-control"/>
            </div>
            <div className="form-group">
              <label>Amount Currently Received</label>
              <input value={amountReceived} onChange={(e) => handleAmountReceived(e.target.value) } className="form-control"/>
            </div>
            {
              (isDebt) ?
              <div className="form-group">
                <h5 className="text-danger">
                  <b>*An account will be created to track more transactions for this Payment</b>
                </h5>
              </div> :
              <></>
            }
          </div>
          <div className="col-md-12 col-sm-12">
            <ItemsForm />
          </div>
          <div className="col-md-12 col-sm-12">
            <hr />
          </div>
          <div className="col-md-12 col-sm-12">
            <button className="btn btn-block text-light"
              onClick={() => {
                mainContext.setDialog('This income record will be saved', saveIncome);
              }}
              style={{ background:"var(--primaryColor)" }}>
              Save Income Record
            </button>
          </div>
        </div>
      </div>
    </NewIncomeContext.Provider>

  );
}
