---
layout: default

project:
 name: Aie OpenGL Engine - Graphics
 description: >
  Basic description about the OpenGL engine I made for the graphics unit at AIE<br>
  It's on bitbucket.
 links:
  - text: Project/Source
    url: https://bitbucket.org/jamesy012/aieopengl
  - text: Download
    url: https://bitbucket.org/jamesy012/aieopengl
 other:
  - text: Lua addition
    url: opengl\AieEngine\lua
  - text: Physics implementation
    url: opengl\AieEngine\physics
 languages:
  - text: C++
  - text: GLSL
 images:
  - loc: opengl/DeferredRendering.gif
    alt: Deferred Rendering stages
    desc: >    
     Demonstrating deferred rendering with 100 lights moving around lighting the plane and the bunny.<br>
     There are two cameras in the scene, one for looking at the two planes, another for the bunny and lights.
     <li>Left panel: Showing albedo,position, normal and the light image's</li>
     <li>Right panel: Showing the final result of the deffered rendering</li>
  - loc: opengl/SelfShadow.gif
    alt: Simple shadow on a bunny
    desc: Directional light coming from the box casting a shadow on the bunny
  - loc: opengl/Inspector.gif
    alt: Box being moved via inspector
    desc: 
     Directional light coming from the flying box towards the origin<br>
     Demonstrates the inspector and transform class I made that allows parenting, translation,rotation and scale
---

{% include project.md %}