import { c as create_ssr_component, f as escape, e as each, b as add_attribute, v as validate_component } from "../../../chunks/index3.js";
import { C as Callout } from "../../../chunks/Callout.js";
const Running = [
  {
    index: 0,
    guid: "ed330c82-efd0-4fd4-85a0-8774999b0cda",
    title: "Thunder",
    artist: "Imagine Dragons",
    img: "../images/Imagine_Dragons_Thunder.jpg"
  },
  {
    index: 1,
    guid: "c2ea45f8-7077-455e-ad35-fe72a7b52ac4",
    title: "Two High",
    artist: "Moon Taxi",
    img: "../images/Moon_Taxi_Two_High.jpg"
  },
  {
    index: 2,
    guid: "1a008a4d-f49b-4bf3-916a-221f5ccbfd45",
    title: "BOOM",
    artist: "X Ambassadors",
    img: "../images/X_Ambassadors_Boom.jpeg"
  },
  {
    index: 3,
    guid: "23a7606a-26ea-4cb2-83299-51ce6d990abc",
    title: "Adventure of a Lifetime",
    artist: "Coldplay",
    img: "../images/Coldplay_Lifetime.jpg"
  },
  {
    index: 4,
    guid: "23a7606a-26ea-4cb2-8779-51ce6d990abc",
    title: "Midnight Sky",
    artist: "Miley Cyrus",
    img: "../images/Miley_Cyrus_Midnight_Sky.png"
  },
  {
    index: 5,
    guid: "23a7606a-26ea-4cb2-8499-51ce6d990abc",
    title: "Counting Stars",
    artist: "OneRepublic",
    img: "../images/OneRepublic_Counting_Stars.png"
  },
  {
    index: 6,
    guid: "23a7606a-26ea-4cb2-8899-51ce6d990abc",
    title: "So What",
    artist: "Pink",
    img: "../images/Pink_So_What.jpg"
  },
  {
    index: 7,
    guid: "23a7606a-26ea-4cb2-8899-51ce6d990abc",
    title: "Shake it Out",
    artist: "Florence + the Machine",
    img: "../images/Shake_it_Out.png"
  }
];
const Chilling = [
  {
    index: 0,
    guid: "ed330c82-efd0-4fd4-85a0-8774999b0cda",
    title: "Sandstorm",
    artist: "Darude",
    img: "../images/Darude_Sandstorm.jpg"
  },
  {
    index: 1,
    guid: "c2ea45f8-7077-455e-ad35-fe72a7b52ac4",
    title: "Right Here, Right Now",
    artist: "Fatboy Slim",
    img: "../images/Fatboy_Slim_Right_Here_Right_Now.jpg"
  }
];
const data = {
  Running,
  Chilling
};
const Playlist_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".playlist.svelte-ucskya.svelte-ucskya{display:grid;grid-template-columns:1fr 1fr;background:#ddd;margin:20px auto;padding:20px;border:2px solid;gap:20px}.song.svelte-ucskya.svelte-ucskya{display:flex;gap:15px;border:1px solid #303030;box-shadow:1px 1px, 2px 2px, 3px 3px, 4px 4px}.song.svelte-ucskya.svelte-ucskya:hover{transform:scale(1.01);box-shadow:2px 2px, 3px 3px, 4px 4px, 5px 5px}img.svelte-ucskya.svelte-ucskya{width:auto;height:auto}.info.svelte-ucskya.svelte-ucskya{padding:3px;width:100%}h3.svelte-ucskya p.svelte-ucskya{text-align:right;font-size:medium}h3.svelte-ucskya p.svelte-ucskya::before{content:'-'}",
  map: null
};
const Playlist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playlist = [] } = $$props;
  let { listName = "" } = $$props;
  if ($$props.playlist === void 0 && $$bindings.playlist && playlist !== void 0)
    $$bindings.playlist(playlist);
  if ($$props.listName === void 0 && $$bindings.listName && listName !== void 0)
    $$bindings.listName(listName);
  $$result.css.add(css$1);
  return `<h3>${escape(listName)}</h3>
<div class="playlist svelte-ucskya">${each(playlist, (song) => {
    return `<div class="song svelte-ucskya"><img${add_attribute("src", song.img, 0)}${add_attribute("alt", song.title, 0)} class="svelte-ucskya">
			<div class="info svelte-ucskya"><h3 class="title svelte-ucskya">${escape(song.title)}
					<p class="artist svelte-ucskya">${escape(song.artist)}</p>
				</h3></div>
		</div>`;
  })}
</div>`;
});
const Song_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-uzh1dv{border:1px solid #ddd;box-shadow:1px 1px, 2px 2px, 3px 3px, 4px 4px;background-color:#dddddd80}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1amkgep_START -->${$$result.title = `<title>Playlists</title>`, ""}<!-- HEAD_svelte-1amkgep_END -->`, ""}

<h1 class="svelte-uzh1dv">Playlists</h1>

${validate_component(Playlist, "Playlist").$$render(
    $$result,
    {
      playlist: data.Running,
      listName: "Time to Run with Scott"
    },
    {},
    {}
  )}
${validate_component(Playlist, "Playlist").$$render(
    $$result,
    {
      playlist: data.Chilling,
      listName: "Decreasing my 5K Run Time"
    },
    {},
    {}
  )}

${validate_component(Callout, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `I do not own any of this music...nor the rights to it.... other disclaimers here that will keep
	people from suing me.`;
    }
  })}`;
});
export {
  Page as default
};
