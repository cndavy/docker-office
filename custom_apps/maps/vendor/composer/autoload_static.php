<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd00b7e592d3863df746d604b37bfb1f5
{
    public static $prefixLengthsPsr4 = array (
        'l' => 
        array (
            'lsolesen\\pel\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'lsolesen\\pel\\' => 
        array (
            0 => __DIR__ . '/..' . '/lsolesen/pel/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd00b7e592d3863df746d604b37bfb1f5::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd00b7e592d3863df746d604b37bfb1f5::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
