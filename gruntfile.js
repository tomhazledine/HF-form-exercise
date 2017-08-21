module.exports=function(grunt){
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'uncompressed/scss/',
                    src: '*.scss',
                    dest: 'assets',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/',
                    ext: '.min.css'
                }]
            }
        }

        // autoprefixer: {
        //     options: {
        //         browsers:['last 2 versions', 'ie 8', 'ie 9']
        //     },
        //     dist:{
        //         files:{
        //             'style.css': 'root.css'
        //         }
        //     }
        // },

        // uglify:{
        //     my_target:{
        //         files:{
        //             'js/script.js':['js/raw/*.js']
        //         }
        //     }
        // },

        // watch:{
        //     styles:{
        //         files: ['root.css'],
        //         tasks: ['autoprefixer']
        //     },
        //     scripts:{
        //         files:['js/raw/*.js'],
        //         tasks:['uglify']
        //     },
        //     sass:{
        //         files:['scss/*.scss'],
        //         tasks:['compass:dev']
        //     }
        // }
      
    });

    grunt.registerTask('dev',['sass']);
    grunt.registerTask('prod',['sass','cssmin']);

    grunt.registerTask('default','prod');
}