import searchImg from './../../img/icon/search.svg';

export default function Search() {
   // function search(formData) {
   //    const query = formData.get("query");
   //    alert(`You searched for '${query}'`);
   // }
   return (
      <form action={2}>
         <input className='input' name="query" placeholder='Search for ...' />
         <button className='button' type="submit">
            <img src={searchImg} alt="Search" />
         </button>
      </form>
   );
}