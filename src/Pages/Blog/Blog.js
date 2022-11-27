import React from "react";
const Blog = () => {
  return (
    <div>
      <div className="w-4/5 md:w-2/3  mx-auto py-20">
        <h2 className="text-center text-5xl mb-10"> Web Blogs </h2>
        {/* first question */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content">
            <div className="overflow-x-auto">
              <h2 className="text-2xl text-blue-600">
                There are four main types of state you need to properly manage
                in your React apps
              </h2>
              <p className="text-2xl">
                1.Local state <br />
                2.Global state <br />
                3.Server state <br />
                4.URL state
              </p>

              <p>
                <span className="font-bold text-xl">
                  {" "}
                  1 . Local (UI) state -{" "}
                </span>
                Local state is data we manage in one or another component. Local
                state is most often managed in React using the useState hook.
                For example, local state would be needed to show or hide a modal
                component or to track values for a form component, such as form
                submission, when the form is disabled and the values of a form’s
                inputs.
              </p>
                    <br />
              <p>
                <span className="font-bold text-xl">
                  {" "}
                  2 . Global (UI) state –{" "}
                </span>
                Global state is data we manage across multiple components.
                Global state is necessary when we want to get and update data
                anywhere in our app, or in multiple components at least. A
                common example of global state is authenticated user state. If a
                user is logged into our app, it is necessary to get and change
                their data throughout our application. Sometimes state we think
                should be local might become global.
              </p>
                    <br />
              <p>
                <span className="font-bold text-xl"> 3. Server state – </span>
                Data that comes from an external server that must be integrated
                with our UI state. Server state is a simple concept, but can be
                hard to manage alongside all of our local and global UI state.
                There are several pieces of state that must be managed every
                time you fetch or update data from an external server, including
                loading and error state. Fortunately there are tools such as SWR
                and React Query that make managing server state much easier.
              </p>
                    <br />
              <p>
                <span className="font-bold text-xl"> 4. URL state – </span>
                Data that exists on our URLs, including the pathname and query
                parameters. URL state is often missing as a category of state,
                but it is an important one. In many cases, a lot of major parts
                of our application rely upon accessing URL state. Try to imagine
                building a blog without being able to fetch a post based off of
                its slug or id that is located in the URL! There are undoubtedly
                more pieces of state that we could identify, but these are the
                major categories worth focusing on for most applications you
                build.
              </p>
            </div>
          </div>
        </div>

        {/* second quetion  */}

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-5 mb-5"
        >
          <div className="collapse-title text-xl font-medium">
            How does prototypical inheritance work?
          </div>
          <div className="collapse-content">

            <p className=" text-xl">
            Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.
            </p>

            <br />
            <p className="text-xl">
            Javascript’s version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar. There are differences in its keyword, syntax, and how it works. There are also debates regarding pros and cons of Javascript’s version of class-based programming, but for simplicity’s sake and learning purposes, I do not want to go over those issues.
            </p>

            <br />

            <p className="text-xl">
            So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.
            </p>

          </div>
        </div>

        {/* third question */}

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5"
        >
          <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content">
            <p className="mb-2 text-2xl">
            Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class. 

Generally, smaller tests are better as they give a more granular view of your code’s performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast.
            </p>

            <br />

            <p className="mb-2 text-3xl text-red-400 font-bold">
            Why Do We Need Unit Testing?
            </p>

            <p className="mb-2 text-2xl">
            Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
            </p>
            <br />

            <p className="mb-2 text-2xl">
              {" "}
              Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
            </p>

            <p className="mb-2 text-2xl">
            Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
            </p>
            <br />

            <p className="mb-2 text-2xl">
            Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
            </p>
            <br />

            <p className="mb-2 text-2xl">
            Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.
            </p>
            <br />

            <p className="mb-2 text-2xl">
            In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback.
            </p>

            <div className="overflow-x-auto"></div>
          </div>
        </div>

        {/* 4th question */}

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
          React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content">
            <div className="overflow-x-auto">
              
              <p className="text-xl">
                <span className="font-bold text-1xl">
                  {" "}
                  1 . Angular JS -{" "}
                </span>
                AngularJS was first released by
                Google in 2010 as a framework for building web applications. The
                Angular 2 framework appeared in 2016, which is a total rewrite
                of the original AngularJS framework. There have been several new
                versions since then. The most recent is currently Angular 13. A
                lot of single-page applications are created using this JS
                framework, which is open-source and free. As it is based on the
                MVW architecture, it has become a very popular choice for
                building cross-platform apps. It offers both client-side MVC and
                MVVM architecture, which makes the development of JavaScript
                applications easier for developers. A lot of businesses are
                using the advantages of outsourcing their development to the
                AngularJs development company.
              </p>
                    <br />
              <p className="text-xl">
                <span className="font-bold text-1xl">
                  {" "}
                  2 . React JS –{" "}
                </span>
                In 2013, Facebook released React as a
                tool to combat the problems triggered by high volumes of traffic
                that were generated by its Facebook ads. However, it also
                resolved issues related to coding and maintenance. In short, it
                is a popular framework for JS developers who want to develop
                single-page websites as well as mobile applications. The Js
                framework is open-source, accessible to everyone, and contains
                features that will help you create iPhone and Android
                applications. Nowadays, large businesses are using React to
                build their web apps. In addition, it is also well known for its
                ability to render top-notch support for the development of
                interactive user interfaces. As of October 2020, the latest
                stable version of the application came out 17. X. It is actually
                a JavaScript library used to build UIs for web and mobile
                applications. The technology is now supported by both Facebook
                and Instagram (Now Meta) and has developed into an essential
                part of the endless feed functionality in these applications. In
                terms of React’s sphere of use, it is a JS library with a
                limited range of applications, however, when combined with other
                libraries, it becomes a powerful solution, making it a
                competitive tool against Angular.
              </p>
                    <br />
              <p className="text-xl">
                <span className="font-bold text-1xl"> 3. Vue Js – </span>
                Evan You, a former employee of Google who worked on Angular when
                he was a Googler, created the Vue framework. Vue.JS is a
                lightweight, powerful, open-source framework that can handle all
                kinds of web applications and be released in the year 2014. In
                terms of the development of single-page applications, the
                application of component composition technique is in high
                demand, particularly for the user interface. As a result of the
                combination of React.js and AngularJS, developers can develop
                beautiful, engaging, and high-quality web applications with Vue
                js. Vue.js is generally defined as a web framework for
                developing user interfaces in a progressive manner. Vue was
                built so that users could adopt the framework incrementally, as
                opposed to Angular. Vue 3 introduces some exciting new features
                and updates to Vue.js. Among the new features are the accurate
                production of standalone reactive objects, async error handling,
                the introduction of Slots, and more. Vue JS has been getting a
                lot of attention lately as one of the hottest topics to discuss
                when it comes to the framework.
              </p>
                    
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
