const container = document.querySelector(".container");

const profile = {
  picture: "https://avatars.githubusercontent.com/u/140866110?v=4",
  picture_alt: "My avatar",
  name: "Zevhys",
};

const data = [
  {
    thumb: "Project/1. Palindrome Checker/thumbnail.jpg",
    thumb_alt: "A screenchot of my palindrome checker project",
    title: "1. Palindrome Checker",
    desc: "Web app that checks whether a given text is a palindrome or not",
    tags: [
      ["HTML", "html5", ""],
      ["CSS", "css3", ""],
      ["JS", "javascript", ""],
    ],
    date: "4 March 2024",
  },

  {
    thumb: "Project/2. Roman Numeral Converter/thumbnail.jpg",
    thumb_alt: "A screenchot of my roman numeral converter project",
    title: "2. Roman Numeral Converter",
    desc: "Web app for converting numbers to Roman numerals",
    tags: [
      ["HTML", "html5", ""],
      ["CSS", "css3", ""],
      ["JS", "javascript", ""],
    ],
    date: "5 March 2024",
  },

  {
    thumb: "Project/3. Telephone Number Validator/thumbnail.jpg",
    thumb_alt: "A screenchot of my Telephone Number Validator project",
    title: "3. Telephone Number Validator",
    desc: "Web app for converting numbers to Roman numerals",
    tags: [
      ["HTML", "html5", ""],
      ["CSS", "css3", ""],
      ["JS", "javascript", ""],
    ],
    date: "6 March 2024",
  },

  {
    thumb: "Project/4. Cash Register/thumbnail.jpg",
    thumb_alt: "A screenchot of my Cash Register project",
    title: "4. Cash Register",
    desc: "Cash Register web app designed to efficiently calculate change due to customers",
    tags: [
      ["HTML", "html5", ""],
      ["CSS", "css3", ""],
      ["JS", "javascript", ""],
    ],
    date: "7 March 2024",
  },

  {
    thumb: "Project/5. Pokémon Search App/thumbnail.jpg",
    thumb_alt: "A screenchot of my Pokémon Search App project",
    title: "5. Pokémon Search App",
    desc: "A stylish Pokémon Search web app that allows users to search for Pokémon by name or ID",
    tags: [
      ["HTML", "html5", ""],
      ["CSS", "css3", ""],
      ["JS", "javascript", ""],
    ],
    date: "8 March 2024",
  },
];

data.forEach((n) => {
  container.innerHTML += `
        <div class="card">
          <div class="card-header">
            <img src="${n.thumb}" alt="${n.thumb_alt}" />
          </div>
          <div class="card-body">
            <div class="tag-container">
              ${n.tags
                .map(
                  (m) => `
                <img
                    height="24"
                    width="24"
                    src="https://cdn.simpleicons.org/${m[1]}/${m[2].toLowerCase()}"
                    alt="${m[0]}"
                />
                `
                )
                .join(" ")}
            </div>
            <h4>
              <a href="Project/${n.title}/index.html">
                ${n.title}
              </a>
            </h4>
            <p>
              ${n.desc}
            </p>
            <div class="user">
              <img src="${profile.picture}" alt="${profile.picture_alt}" />
              <div class="user-info">
                <h5>${profile.name}</h5>
                <small>${n.date}</small>
              </div>
            </div>
          </div>
        </div>
    `;
});
