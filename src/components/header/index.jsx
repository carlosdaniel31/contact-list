import "./styles.css"
import { Edit2, Plus, Search, Trash2 } from 'lucide-react'

export default function Header() {
  return (
    <header>
      <div>
        <h1>Meus contatos</h1>
        <Plus />
        <Edit2 />
        <Trash2 />
      </div>
      <div>
        <Search className="search" />
        <input
          type="text"
          placeholder="Busque por nome ou por dados de contato..."
        />
      </div>
    </header>
  )
}
