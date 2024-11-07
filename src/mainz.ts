// main.ts

// Import all necessary modules
// import * as ModuleA from './modules/moduleA';
// import * as ModuleB from './modules/moduleB';
// Additional imports can be added here as the project grows

// Centralized initialization or configuration if needed
function iniciarGeovisor() {
    console.log("Initializing main application...");
    
    // Optional: Initialize each module if necessary
    // ModuleA.initialize();
    // ModuleB.initialize();
}

// Expose modules and core functionality
const app = {
    // ModuleA,
    // ModuleB,
    // initializeApp
};

export default app;

// Run initialization on load if needed
iniciarGeovisor();