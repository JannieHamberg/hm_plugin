<?php
/**
 * Plugin Name: HM Plugin
 * Description: A custom plugin with multiple Gutenberg blocks.
 * Version: 1.0
 * Author: Jannie Hamberg
 */

function hm_plugin_register_blocks() {
    wp_register_script(
        'hm-plugin-blocks-js',
        plugins_url( 'build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' ), 
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
    );

    register_block_type( 'hm-plugin/block-one', array(
        'editor_script' => 'hm-plugin-blocks-js',
    ) );

    register_block_type( 'hm-plugin/block-two', array(
        'editor_script' => 'hm-plugin-blocks-js',
    ) );
}
add_action( 'init', 'hm_plugin_register_blocks' );
