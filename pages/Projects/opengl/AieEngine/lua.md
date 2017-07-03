---
layout: default

project:
 name: Aie OpenGL Engine - Lua
 description: >
  Basic description about the OpenGL engine I made for the graphics unit at AIE.<br>
  <ul>
    <li>Transform creation.</li>
    <ul>
        <li>Transform movement.</li>
        <li>Transform rotation.</li>
        <li>Transform parenting.</li>
    </ul>
    <li>Mesh/Image creation.</li>
    <li>Camera modifications.</li>
  </ul>
  <br>
  all objects are given a number that relates to the object within the C++ code.
 links:
  - text: Project/Source
    url: https://bitbucket.org/jamesy012/aieopengl
  - text: Lua Code
    url: https://bitbucket.org/jamesy012/aieopengl
 languages:
  - text: C++
  - text: Lua
 images:
  - loc: opengl/lua1.gif 
    alt: example of lua being used within the engine
    desc: 
     Example of the Lua bindings within my graphics engine<br>
     Everything in the gif is controlled by lua

 other:
  - text: Graphics implementation
    url: opengl\AieEngine\graphics
  - text: Physics implementation
    url: opengl\AieEngine\physics
---

{% include project.md %}