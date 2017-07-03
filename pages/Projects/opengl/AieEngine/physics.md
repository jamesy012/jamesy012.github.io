---
layout: default

project:
 name: Aie OpenGL Engine - Physics
 description: >
  Basic phyics engine Lib built apon my work in my graphics lib.
 links:
  - text: Project/Source
    url: https://bitbucket.org/jamesy012/aieopengl
 languages:
  - text: C++
 images:
  - loc: opengl/physics1.gif 
    alt: 
    desc:
  - loc: opengl/physics2.gif 
    alt: 
    desc:
  - loc: opengl/physics3.gif 
    alt: 
    desc: 
     The cubes all use AABB, so when rotated the collider no longer matches up,<br>
     but when working out the angle from the collision I used angle of the cube, so all the balls will slide to the direction the cube is rotated.
    
 other:
  - text: Graphics implementation
    url: opengl\AieEngine\graphics
  - text: Lua addition
    url: opengl\AieEngine\lua
---

{% include project.md %}