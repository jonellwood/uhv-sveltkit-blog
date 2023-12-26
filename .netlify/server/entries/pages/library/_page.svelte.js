import { c as create_ssr_component, e as each, b as add_attribute, f as escape, v as validate_component } from "../../../chunks/index3.js";
import { C as Callout } from "../../../chunks/Callout.js";
const Library_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".bookshelf.svelte-thh1yh.svelte-thh1yh{display:grid;grid-template-columns:repeat(auto-fill, minmax(10.5em, 1fr));background:#ddd;margin:20px auto;padding:20px;border:2px solid;box-shadow:1px 1px, 2px 2px, 3px 3px, 4px 4px}.book.svelte-thh1yh.svelte-thh1yh{display:grid;align-items:center;justify-content:center;margin:1em;position:relative}.cover.svelte-thh1yh img.svelte-thh1yh{width:180px;height:auto;margin-left:auto;margin-right:auto}.info.svelte-thh1yh.svelte-thh1yh{margin:0.5rem;margin-top:1em;display:grid;grid-template-rows:auto auto 1fr}.info.svelte-thh1yh h3.svelte-thh1yh{display:grid;grid-template-rows:auto auto 1fr;font-size:1em;margin:0;text-align:left}.author.svelte-thh1yh.svelte-thh1yh{margin-bottom:0;margin-top:0.5rem;padding-top:10px;text-align:left;font-size:0.55em}",
  map: null
};
const Library = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { library = [] } = $$props;
  if ($$props.library === void 0 && $$bindings.library && library !== void 0)
    $$bindings.library(library);
  $$result.css.add(css$1);
  return `<div class="bookshelf svelte-thh1yh">${each(library, (book) => {
    return `<div class="book svelte-thh1yh"><a class="cover svelte-thh1yh"${add_attribute("href", book.href, 0)}><img${add_attribute("src", book.img, 0)}${add_attribute("alt", book.title, 0)} class="svelte-thh1yh"></a>
			<div class="info svelte-thh1yh"><h3 class="title svelte-thh1yh">${escape(book.title)}
				</h3></div>
			<p class="author svelte-thh1yh">${escape(book.author)}</p>
		</div>`;
  })}
</div>`;
});
const Books = [
  {
    index: 0,
    title: "The Bhagavad Gita",
    author: "Eknath Easwaran",
    img: "https://m.media-amazon.com/images/I/41tIqNDvsDS._SX307_BO1204203200_.jpg",
    href: "https://www.amazon.com/The-Bhagavad-Gita-Eknath-Easwaran-audiobook/dp/B00TGA3HGO/ref:sr_1_1?crid=3NPDQV3VYLBFG&keywords=the+bhagavad+gita&qid=1692984203&s=books&sprefix=the+bhagavag%2Cstripbooks%2C91&sr=1-1",
    target: "_blank"
  },
  {
    index: 1,
    title: "The Blue Zones Cookbook",
    author: "Dan Buettner",
    img: "https://m.media-amazon.com/images/I/915nQzjsMIL.jpg",
    href: "https://www.amazon.com/Blue-Zones-American-Kitchen-Recipes/dp/1426222475/ref=sr_1_1?crid=3NCFQHVIXAML9&keywords=blue+zones+cookbook&qid=1693834442&s=books&sprefix=blue+zone%2Cstripbooks%2C253&sr=1-1",
    target: "_blank"
  },
  {
    index: 2,
    title: "Automate the Boring Stuff with Python",
    author: "Al Sweigart",
    img: "https://m.media-amazon.com/images/I/51B161E04DL._SX375_BO1204203200_.jpg",
    href: "https://www.amazon.com/Automate-Boring-Stuff-Python-2nd/dp/1593279922/ref=sr_1_6?keywords=Python&qid=1692985496&s=books&sr=1-6",
    target: "_blank"
  },
  {
    index: 3,
    title: "The Ransomware Hunting Team 🎧",
    author: "Renee Dudley",
    img: "https://m.media-amazon.com/images/I/51--x8JKaxL._SX322_BO1204203200_.jpg",
    href: "https://www.amazon.com/Ransomware-Hunting-Team-Improbable-Cybercrime/dp/125087260X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1692986497&sr=1-1",
    target: "_blank"
  },
  {
    index: 4,
    title: "Practical SQL 2nd Edition",
    author: "Anthony DeBarros",
    img: "https://m.media-amazon.com/images/I/51z6o9WG-1L._SX376_BO1204203200_.jpg",
    href: "https://www.amazon.com/Practical-SQL-2nd-Beginners-Storytelling/dp/1718501064/ref=sr_1_1?keywords=Practical+SQL&qid=1692985657&s=books&sr=1-1",
    target: "_blank"
  },
  {
    index: 5,
    title: "Mindf*ck 🎧",
    author: "Christopher Wylie",
    img: "https://m.media-amazon.com/images/I/411t+gfdxGL._SX325_BO1204203200_.jpg",
    href: "https://www.amazon.com/Mindf-ck/dp/1788165004",
    target: "_blank"
  },
  {
    index: 6,
    title: "The Club: ...",
    author: "Joshua Robinson & Jonathan Clegg",
    img: "https://m.media-amazon.com/images/I/41uNKGyfM0L._SX330_BO1204203200_.jpg",
    href: "https://www.amazon.com/Club-English-Premier-Wildest-Disruptive/dp/0358213053/ref:asc_df_0358213053/?tag=hyprod-20&linkCode=df0&hvadid=366289401820&hvpos=&hvnetw=g&hvrand=4380987740227661232&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9010524&hvtargid=pla-815438317800&psc=1&tag=&ref=&adgrpid=79033899831&hvpone=&hvptwo=&hvadid=366289401820&hvpos=&hvnetw=g&hvrand=4380987740227661232&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9010524&hvtargid=pla-815438317800",
    target: "_blank"
  },
  {
    index: 7,
    title: "The Dream Machine 🎧",
    author: "M. Mitchell Waldrop",
    img: "https://m.media-amazon.com/images/I/41OKEFgt20L._SX336_BO1204203200_.jpg",
    href: "https://www.amazon.com/Dream-Machine-M-Mitchell-Waldrop/dp/1732265119/ref=sr_1_1?crid=3VBJDBXN7N1SN&keywords=The+Dream+Machine&qid=1692986319&s=books&sprefix=the+dream+machine%2Cstripbooks%2C102&sr=1-1",
    target: "_blank"
  },
  {
    index: 8,
    title: "Pegasus 🎧",
    author: "Laurent Richard and Sandrine Rigaud",
    img: "https://m.media-amazon.com/images/I/51vXzEadR0L.jpg",
    href: "https://www.amazon.com/Pegasus-Threatens-Privacy-Dignity-Democracy/dp/B09QBD91KX/ref=sr_1_1?keywords=pegasus+book&qid=1693832402&s=books&sprefix=pegasus%2Cstripbooks%2C119&sr=1-1",
    target: "_blank"
  },
  {
    index: 9,
    title: "Permanent Record 🎧",
    author: "Edward Snowden",
    img: "https://m.media-amazon.com/images/I/91GgFOOnD+L._AC_UF10001000_QL80_.jpg",
    href: "https://www.amazon.com/Permanent-Record-Edward-Snowden-audiobook/dp/B07VZWH6NB/ref=sr_1_1?crid=34KP693LBB94J&keywords=permanent+record&qid=1693832903&s=audible&sprefix=permanent+record%2Caudible%2C81&sr=1-1",
    target: "_blank"
  },
  {
    index: 10,
    title: "Tracers in the Dark 🎧",
    author: "Andy Greenberg",
    img: "https://m.media-amazon.com/images/I/71ifCS8ZjLL._AC_UF10001000_QL80_.jpg",
    href: "https://www.amazon.com/Tracers-Dark-Global-Crime-Cryptocurrency/dp/B09VLJ2WWD/ref=sr_1_1?crid=165BP0LBTN6GL&keywords=tracers+in+the+dark&qid=1693832599&s=audible&sprefix=tracers+in+the+dark%2Caudible%2C118&sr=1-1",
    target: "_blank"
  },
  {
    index: 11,
    title: "Sandworm 🎧",
    author: "Andy Greenberg",
    img: "https://m.media-amazon.com/images/I/A1Asn5FZ-aL._AC_UF10001000_QL80_.jpg",
    href: "https://www.amazon.com/Sandworm-Andy-Greenberg-audiobook/dp/B07RGRTZM6/ref=sr_1_2?crid=165BP0LBTN6GL&keywords=tracers+in+the+dark&qid=1693832599&s=audible&sprefix=tracers+in+the+dark%2Caudible%2C118&sr=1-2",
    target: "_blank"
  },
  {
    index: 12,
    title: "Columbus Day (Expeditionary Force) 🎧",
    author: "Craig Alanson",
    img: "https://m.media-amazon.com/images/I/4137ZG1LpKL._SY425_.jpg",
    href: "https://www.amazon.com/Columbus-Expeditionary-Force-Craig-Alanson/dp/1520126247",
    target: "_blank"
  },
  {
    index: 13,
    title: "SpecOps (Expeditionary Force) 🎧",
    author: "Craig Alanson",
    img: "https://m.media-amazon.com/images/I/41RxZ2RNCUL._SY425_.jpg",
    href: "https://www.amazon.com/gp/product/1973181835?ref_=dbs_m_mng_rwt_calw_tpbk_1&storeType=ebooks",
    target: "_blank"
  },
  {
    index: 14,
    title: "Paradise (Expeditionary Force) 🎧",
    author: "Craig Alanson",
    img: "https://m.media-amazon.com/images/I/51hV6b+NscL._SY425_.jpg",
    href: "https://www.amazon.com/gp/product/1973182661?ref_=dbs_m_mng_rwt_calw_tpbk_2&storeType=ebooks",
    target: "_blank"
  },
  {
    index: 15,
    title: "Trouble on Paradise: an ExForce novella 🎧",
    author: "Craig Alanson",
    img: "https://m.media-amazon.com/images/I/51U+KuL3oHL._SY425_.jpg",
    href: "https://www.amazon.com/gp/product/1973182807?ref_=dbs_mng_crcw_0&storeType=ebooks",
    target: "_blank"
  },
  {
    index: 16,
    title: "METAtropolis 🎧",
    author: "Jay Lake, Tobias Buckell, Elizabeth Bear, John Scalzi, Karl Schroeder",
    img: "https://m.media-amazon.com/images/I/51+mpeJfU6L.jpg",
    href: "https://www.audible.com/pd/METAtropolis-Audiobook/B002UZNIHK?eac_link=H2z76MNwqqfx&ref=web_search_eac_asin_1&eac_selected_type=asin&eac_selected=B002UZNIHK&qid=f2fx7tRtUk&eac_id=145-7277985-1897710_f2fx7tRtUk&sr=1-1",
    target: "_blank"
  },
  {
    index: 17,
    title: "METAtropolis: Cascadia 🎧",
    author: "Jay Lake",
    img: "https://m.media-amazon.com/images/I/51re1SCLA9L.jpg",
    href: "https://www.amazon.com/METAtropolis-Cascadia-audiobook/dp/B004CJJHJ0/ref=sr_1_1?crid=YB7CSWFUV9BX&keywords=metatropolis&qid=1703280790&s=digital-text&sprefix=METAtrop%2Cdigital-text%2C92&sr=1-1-catcorr",
    target: "_blank"
  },
  {
    index: 18,
    title: "The Dispatcher 🎧",
    author: "John Scalzi",
    img: "https://m.media-amazon.com/images/I/81m6kh+t45L.jpg",
    href: "https://www.amazon.com/Dispatcher-John-Scalzi-ebook/dp/B06XZ41MYR/ref=sr_1_1?crid=37ELXO2JDEDIP&keywords=the+dispatcher+john+scalzi&qid=1703281089&s=digital-text&sprefix=the+dispatch%2Cdigital-text%2C94&sr=1-1",
    target: "_blank"
  },
  {
    index: 19,
    title: "The Dispatcher: Murder by Other Means 🎧",
    author: "John Scalzi",
    img: "https://m.media-amazon.com/images/I/81nzp0wJc4L.jpg",
    href: "https://www.amazon.com/dp/B091DMSK36/ref=mes-dp?_encoding=UTF8&pd_rd_w=Gq3NI&content-id=amzn1.sym.07f68587-1ea8-46cf-8c0c-8374d8d96b4a&pf_rd_p=07f68587-1ea8-46cf-8c0c-8374d8d96b4a&pf_rd_r=GARRSV55QZ0C5TSJ5Q3W&pd_rd_wg=XWkwE&pd_rd_r=79812a03-3a2d-49aa-aeea-ef1ef9529fcb",
    target: "_blank"
  },
  {
    index: 20,
    title: "The Dispatcher: Travel by Bullet 🎧",
    author: "John Scalzi",
    img: "https://m.media-amazon.com/images/I/81h5JVdNFPL.jpg",
    href: "https://www.amazon.com/dp/B0BX73GGL4/ref=mes-dp?_encoding=UTF8&pd_rd_w=Gq3NI&content-id=amzn1.sym.07f68587-1ea8-46cf-8c0c-8374d8d96b4a&pf_rd_p=07f68587-1ea8-46cf-8c0c-8374d8d96b4a&pf_rd_r=GARRSV55QZ0C5TSJ5Q3W&pd_rd_wg=XWkwE&pd_rd_r=79812a03-3a2d-49aa-aeea-ef1ef9529fcb",
    target: "_blank"
  },
  {
    index: 21,
    title: "The Lazarus Heist 🎧",
    author: "Geoff White",
    img: "https://m.media-amazon.com/images/I/91tfWm4spUL._SL1500_.jpg",
    href: "https://www.amazon.com/Lazarus-Heist-Based-Hit-podcast-ebook/dp/B09QLTPPBW/ref=sr_1_1?crid=1LUJQAG2TN2G8&keywords=the+lazarus+heist&qid=1703281413&s=digital-text&sprefix=the+lazarus+heist%2Cdigital-text%2C91&sr=1-1",
    target: "_blank"
  },
  {
    index: 22,
    title: "The Complete Father Brown Collection 🎧",
    author: "G. K. Chesterton",
    img: "https://m.media-amazon.com/images/I/41UvptAQVfL.jpg",
    href: "https://www.amazon.com/The-Complete-Father-Brown-Collection/dp/B07X8PK1WF/ref=sr_1_1?crid=15I9X939SF4R&keywords=father+brown+complete+collection&qid=1703281559&s=books&sprefix=the+complete+father+%2Cstripbooks%2C83&sr=1-1",
    target: "_blank"
  },
  {
    index: 23,
    title: "A Man of Some Repute: A Very English Mystery 🎧",
    author: "Elizabeth Edmondson",
    img: "https://m.media-amazon.com/images/I/51q3+G8BPkL.jpg",
    href: "https://www.amazon.com/A-Man-of-Some-Repute-audiobook/dp/B00YNLTMVA/ref=sr_1_1?crid=1CUBJBHJ3SE4H&keywords=a+man+of+some+repute&qid=1703281872&s=audible&sprefix=a+man+of+some+re%2Caudible%2C88&sr=1-1",
    target: "_blank"
  },
  {
    index: 24,
    title: "A Question of Inheritance: A Very English Mystery 🎧",
    author: "Elizabeth Edmondson",
    img: "https://m.media-amazon.com/images/I/51CMnZcr6-L.jpg",
    href: "https://www.amazon.com/A-Question-of-Inheritance-audiobook/dp/B01AGOUZ40/ref=sr_1_2?crid=1CUBJBHJ3SE4H&keywords=a+man+of+some+repute&qid=1703281970&s=audible&sprefix=a+man+of+some+re%2Caudible%2C88&sr=1-2",
    target: "_blank"
  },
  {
    index: 25,
    title: "A Matter of Loyalty: A Very English Mystery 🎧",
    author: "Elizabeth Edmondson",
    img: "https://m.media-amazon.com/images/I/51fV8Do8XsL.jpg",
    href: "https://www.amazon.com/A-Matter-of-Loyalty-audiobook/dp/B075SMZ529/ref=sr_1_3?crid=1CUBJBHJ3SE4H&keywords=a+man+of+some+repute&qid=1703281970&s=audible&sprefix=a+man+of+some+re%2Caudible%2C88&sr=1-3",
    target: "_blank"
  }
];
const Audiobooks = [
  {
    index: 0,
    title: "Sandworm 🎧",
    author: "Andy Greenberg",
    img: "https://m.media-amazon.com/images/I/A1Asn5FZ-aL._AC_UF10001000_QL80_.jpg",
    href: "https://www.amazon.com/Sandworm-Andy-Greenberg-audiobook/dp/B07RGRTZM6/ref=sr_1_2?crid=165BP0LBTN6GL&keywords=tracers+in+the+dark&qid=1693832599&s=audible&sprefix=tracers+in+the+dark%2Caudible%2C118&sr=1-2",
    target: "_blank"
  }
];
const data = {
  Books,
  Audiobooks
};
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-uzh1dv{border:1px solid #ddd;box-shadow:1px 1px, 2px 2px, 3px 3px, 4px 4px;background-color:#dddddd80}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-krt879_START -->${$$result.title = `<title>Library</title>`, ""}<!-- HEAD_svelte-krt879_END -->`, ""}

<h1 class="svelte-uzh1dv">Library</h1>

${validate_component(Library, "Library").$$render($$result, { library: data.Books }, {}, {})}

${validate_component(Callout, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `Curious about how I made this library? Ask <a href="https://daverupert.com/" target="_blank">Dave Rupert</a> - since I took the whole idea from his page. Let&#39;s call it a &#39;Homage&#39; as it sounds more respectable
	than Plagiarism. Also his looks much better. His is the Amazon version, mine is the AliExpress Version.
`;
    }
  })}`;
});
export {
  Page as default
};
