<?php

class React
{

    public $modeProd = false;
    public $assets = '';
    public $react_host = 'http://localhost:5174';
    public $Context;

    public function __construct()
    {
        $this->Context = new Context();
        $this->assets = $this->getAssets();
    }

    public function getAssets()
    {
        if(!$this->modeProd){
            return '<script type="module" src="'.$this->react_host.'/main.jsx"></script>';
        }

        // Directorio donde se encuentran los archivos
        $directory = dirname(__FILE__) . '/dist/assets';

        // Obtener todos los archivos en el directorio
        $files = scandir($directory);

        // Filtrar los archivos que no son útiles
        $files = array_filter($files, function ($file) {
            // Filtrar solo los archivos que no comienzan con '.'
            return !in_array($file, ['.', '..']) && !is_dir($file) && pathinfo($file, PATHINFO_EXTENSION);
        });
    
        // Devolver la lista de nombres de archivos
        $assets = '';
        foreach($files as $file){
            $assets .= '<script type="module" src="'.dirname(__FILE__).'react/dist/assets/'.$file.'"></script>';
        }

        return $assets;
    }
}
