import "./styles.css"
import { useState } from "react"
import { yourContacts } from "../../contacts"

export default function Contacts(){
  const [contacts, setContacts] = useState(yourContacts)
  const [selectedDivs, setSelectedDivs] = useState({})

  const handleDivClick = (key) => {
    setSelectedDivs({
      // ...selectedDivs,
      [key]: !selectedDivs[key]
    })
  }

  return(
    <main>
      <div className="all">
        <section>
          <div className="letter">
            <span>a</span>
          </div>
          <div>
            {contacts.a.map(item =>(
              <div className="info"
                key={item.telephone} 
                onClick={()=>handleDivClick(item.telephone)}
                style={{border: selectedDivs[item.telephone] ? "1px solid #E1E1E6" : "0", borderRadius: "4px"}}
              >
                <img src={item.img} />
                <div>
                  <span>{item.name}</span>
                  <small>{item.telephone}</small>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="letter">
            <span>b</span>
          </div>
          <div>
            {contacts.b.map(item =>(
              <div className="info"
                key={item.telephone} 
                onClick={()=>handleDivClick(item.telephone)}
                style={{border: selectedDivs[item.telephone] ? "1px solid #E1E1E6" : "0", borderRadius: "4px"}}
              >
                <img src={item.img} />
                <div>
                  <span>{item.name}</span>
                  <small>{item.telephone}</small>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="letter">
            <span>c</span>
          </div>
          <div>
            {contacts.c.map(item =>(
              <div className="info"
                key={item.telephone} 
                onClick={()=>handleDivClick(item.telephone)}
                style={{border: selectedDivs[item.telephone] ? "1px solid #E1E1E6" : "0", borderRadius: "4px"}}
              >
                <img src={item.img} />
                <div>
                  <span>{item.name}</span>
                  <small>{item.telephone}</small>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}