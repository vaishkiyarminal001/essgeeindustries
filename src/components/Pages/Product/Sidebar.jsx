import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css";


const Sidebar = () => {
  // Define state variables for each category
  const [showTapes, setShowTapes] = useState(false);
  const [showAirCleaners, setShowAirCleaners] = useState(false);
  const [showMaskingRange, setShowMaskingRange] = useState(false);
  const [showFoamRange, setShowFoamRange] = useState(false);
  const [showLabelsRange, setShowLabelsRange] = useState(false);
  const [showNewDevelopment, setShowNewDevelopment] = useState(false);

  // Toggle functions for each category
  const toggleTapes = () => {
    setShowTapes(!showTapes);
  };

  const toggleAirCleaners = () => {
    setShowAirCleaners(!showAirCleaners);
  };

  const toggleMaskingRange = () => {
    setShowMaskingRange(!showMaskingRange);
  };

  const toggleFoamRange = () => {
    setShowFoamRange(!showFoamRange);
  };

  const toggleLabelsRange = () => {
    setShowLabelsRange(!showLabelsRange);
  };

  const toggleNewDevelopment = () => {
    setShowNewDevelopment(!showNewDevelopment);
  };

  return (
    <div className="sidebar">
      <input type="text" placeholder="Search" />
      <div className="sidebar-section">
        <h2>OUR PRODUCTS</h2>
        <ul>

        {/* Adhesive and Non-Adhesive Tapes */}

          <li  onClick={toggleTapes}>
          <FontAwesomeIcon icon={faArrowRight} style={{color:'black', marginRight:'2px'}} />
           <span className='headLi'>
           Adhesive and Non-Adhesive Tapes</span> 
            {showTapes && (
              <ul>
                <li>Foam Tapes</li>
                <li>EVA Foam Tapes</li>
                <li>EPDM Foam Tapes</li>
                <li>PU Foam Tapes</li>
                <li>Filter Foam Tapes</li>
                <li>PE Tapes</li>
                <li>Acrylic Tapes</li>
                <li>Filament Tapes</li>
                <li>Aluminium Tapes</li>
                <li>Kapton Tapes</li>
                <li>Silicon Tapes</li>
                <li>Cloth Tapes</li>
                <li>Cotton Tapes</li>
                <li>Polyester Tapes</li>
                <li>Non Woven Felt Tapes</li>
                <li>Masking Tapes</li>
                <li>Masking Die Cut Tapes</li>
                <li>Rubber Tapes</li>
                <li>Neoprene Rubber Tapes</li>
                <li>CRB Rubber Tapes</li>
                <li>D Sided Tissue Tapes</li>
                <li>EPDM Open Cell Tapes</li>
                <li>Tamper Proof Tapes</li>
                <li>BOPP Packing Tapes</li>
              </ul>
            )}
          </li>

          {/* Air Cleaners and Filters */}


          <li onClick={toggleAirCleaners}>
          <FontAwesomeIcon icon={faArrowRight} style={{color:'black', marginRight:'2px'}} />
          <span className='headLi'>Air Cleaners and Filters</span>
            {showAirCleaners && (
              <ul>
                <li>Air Cleaner Filters</li>
                <li>Profile Heat Sealing Foam</li>
                <li>Air Filter Foam</li>
              </ul>
            )}
          </li>

          {/* Masking Range */}

          <li onClick={toggleMaskingRange}>
          <FontAwesomeIcon icon={faArrowRight} style={{color:'black', marginRight:'2px'}} />
          <span className='headLi'>Masking Range</span>
            {showMaskingRange && (
              <ul>
                <li>Paint Masking</li>
                <li>Side Cover Masking</li>
                <li>Front Grill Masking</li>
                <li>Front Fender Masking</li>
                <li>Speedometer Cluster Masking</li>
                <li>Front Fog Masking</li>
                <li>Visor Masking</li>
                <li>HeadLamp Masking</li>
                <li>TailLamp Masking</li>
                <li>Cowl Masking</li>
                <li>AI Cone Masking Fuel Tank</li>
              </ul>
            )}
          </li>

          {/* Foam Range */}

          <li onClick={toggleFoamRange}>
          <FontAwesomeIcon icon={faArrowRight} style={{color:'black', marginRight:'2px'}} />
          <span className='headLi'>Foam Range</span>
            {showFoamRange && (
              <ul>
                <li>Reticulated PU Foam</li>
                <li>EPDM Sponge Rubber Foam</li>
                <li>Neoprene Sponge Foam</li>
                <li>Nitrile Sponge Rubber Foam</li>
                <li>EVA Foam</li>
                <li>PE Foam</li>
                <li>Melamine Foam</li>
                <li>Rebonded Foam</li>
                <li>EPT Sealer</li>
                <li>XLPE,XPE Foam Sheet</li>
                <li>Super Seal/Super Sheet</li>
              </ul>
            )}
          </li>

          {/* Labels Range */}

          <li onClick={toggleLabelsRange}>
          <FontAwesomeIcon icon={faArrowRight} style={{color:'black', marginRight:'2px'}} />
          <span className='headLi'>Labels Range</span>
            {showLabelsRange && (
              <ul>
                <li>Labels</li>
                <li>Dome Labels</li>
                <li>Tamper Proof Labels</li>
                <li>Security Labels</li>
              </ul>
            )}
          </li>

          {/* New Development Range */}

          <li onClick={toggleNewDevelopment}>
          <FontAwesomeIcon icon={faArrowRight} style={{color:'black', marginRight:'2px'}} />
         <span className='headLi'>New Development Range</span> 
            {showNewDevelopment && (
              <ul>
                <li>Two Wheeler in Dual Color</li>
                <li>Machine Body Dual Color</li>
                <li>Housing for Railways</li>
                <li>Rubber Pad Load Body</li>
                <li>Door Seal Membrane</li>
                <li>Surface Protection</li>
                <li>Chamois Leather</li>
                <li>Sponge Mask</li>
              </ul>
            )}
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
