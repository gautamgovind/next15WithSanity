import { Search } from "lucide-react";
import Form from "next/form";
import SearchFormReset from './SearchFormReset';

const SerachForm = (query: {query?: string}) => {

  return (
    <Form action="/" scroll={false} className="search-form">
        <input
            name='query'
            defaultValue=""
            className="search-input"
            placeholder="Search ideas"
        />
        <div className='flex gap-2'>
            {query && (
                <SearchFormReset />
            )}
            <button type="submit" className="search-btn text-white">
                <Search className="size-5" />
            </button>
        </div>
    </Form>
  )
}

export default SerachForm