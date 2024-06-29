<?php
function load_react_scripts() {
    // React ishlab chiqarilgan fayllarni yuklash
    wp_enqueue_script('vite-react-app', get_template_directory_uri() . '/react-src/dist/assets/index-BZkx2M29.js', array(), null, true);

    // TailwindCSS stilini yuklash
    wp_enqueue_style('tailwindcss', get_template_directory_uri() . '/react-src/dist/assets/index-DiwrgTda.css');
}
add_action('wp_enqueue_scripts', 'load_react_scripts');

?>