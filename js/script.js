/*
====================================================
              YOUR PROJECTS
====================================================

THIS is the ONLY section you normally need to edit.

Add your projects inside the "projects" array.

Each project has:

title
    → Project name

description
    → Short explanation

image
    → Screenshot/image of the project

link
    → Website, GitHub repository, etc.

category
    → Used to automatically create filters

tags
    → Technologies used
====================================================
*/


const projects = [

    {
        title: "Cloud-culator",

        description:
            "A calculator project built with HTML, CSS, and JavaScript.",

        image:
            "https://placehold.co/900x600/171923/a78bfa?text=Cloud-culator",

        link:
            "#",

        category:
            "Web",

        tags:
            ["HTML", "CSS", "JavaScript"]
    },


    {
        title: "Cloud's Clickin!",

        description:
            "A Python Tkinter project with an interactive desktop interface.",

        image:
            "https://placehold.co/900x600/171923/a78bfa?text=Cloud%27s+Clickin!",

        link:
            "#",

        category:
            "Python",

        tags:
            ["Python", "Tkinter"]
    },


    {
        title: "Number Guessing Game",

        description:
            "A browser game where the player guesses a randomly generated number.",

        image:
            "https://placehold.co/900x600/171923/a78bfa?text=Guessing+Game",

        link:
            "#",

        category:
            "Web",

        tags:
            ["HTML", "CSS", "JavaScript"]
    }

];



/*
====================================================
              DON'T NEED TO EDIT BELOW
====================================================
*/


const projectGrid =
    document.getElementById("projectGrid");


const filters =
    document.getElementById("filters");



/*
    Get all categories from the projects.

    Example:

    Web
    Python
    Games

    Then automatically create:

    All | Web | Python | Games
*/

function getCategories() {

    return [
        "All",
        ...new Set(
            projects.map(
                project => project.category
            )
        )
    ];

}



/*
    Create the category buttons.
*/

function createFilters() {

    filters.innerHTML = "";


    getCategories().forEach(category => {

        const button =
            document.createElement("button");


        button.className =
            "filter";


        button.textContent =
            category;


        if (category === "All") {

            button.classList.add("active");

        }


        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".filter")
                    .forEach(btn => {

                        btn.classList
                            .remove("active");

                    });


                button.classList
                    .add("active");


                displayProjects(category);

            }
        );


        filters.appendChild(button);

    });

}



/*
    Display the projects.

    If category = "All",
    show everything.

    Otherwise,
    only show projects
    belonging to that category.
*/

function displayProjects(
    category = "All"
) {

    const visibleProjects =

        category === "All"

            ? projects

            : projects.filter(
                project =>
                    project.category === category
            );


    projectGrid.innerHTML = "";


    visibleProjects.forEach(
        project => {


            const card =
                document.createElement("article");


            card.className =
                "project-card";


            card.innerHTML = `

                <div class="project-image">

                    <img
                        src="${project.image}"
                        alt="${project.title}"
                        loading="lazy"
                    >

                </div>


                <div class="project-info">

                    <h3>
                        ${project.title}
                    </h3>


                    <p>
                        ${project.description}
                    </p>


                    <div class="project-tags">

                        ${
                            project.tags
                                .map(
                                    tag =>
                                        `<span>${tag}</span>`
                                )
                                .join("")
                        }

                    </div>


                    <a
                        class="project-link"
                        href="${project.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        View Project →

                    </a>

                </div>

            `;


            projectGrid.appendChild(card);

        }
    );

}



/*
====================================================
                 DARK / LIGHT MODE
====================================================
*/


const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener(
    "click",
    () => {

        document.body
            .classList
            .toggle("light");


        if (
            document.body
                .classList
                .contains("light")
        ) {

            themeBtn.textContent =
                "☀";

        }

        else {

            themeBtn.textContent =
                "☾";

        }

    }
);



/*
    Automatically put the
    current year in the footer.
*/

document.getElementById("year")
    .textContent =
    new Date().getFullYear();



/*
====================================================
                  START WEBSITE
====================================================
*/


createFilters();

displayProjects();