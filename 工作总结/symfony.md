# 概念
  
  - 持久化  
    持久化就是把放在内存的数据转而存到外存去的一个动作。
    因内存的数据断电而消亡，所以，将其存在外存来使得数据得以持续。即为持久化。

# 操作

  - 文件上传
    
      - 原生php中的上传流程
      
        在原生的php中查看上传的文件信息在超级变量
        `$_FILE` 中查看，其有5个属性：
         - `$_FILE['type_name']['name']`    
            上传的原文件名 
         - `$_FILE['type_name']['type']`  
            上传文件的类型
         - `$_FILE['type_name']['error']`  
            上传文件时的错误类型，如果等于0则上传成功
         - `$_FILE['type_name']['tmp_name']`  
            上传文件的临时文件名
         - `$_FILE['type_name']['size']`  
            上传文件的大小,以字节计算

        在文件上传成功，可以做一系列的检测，比如大小限制，图片类型判断、临时文件是否存在等等，然后把临时文件移至其他文件夹。因为临时副本会在脚本结束的时候消失。
        使用 `move_uploaded_file($_FILE['type_name']['tmp_name'],url.filename)`。

      - symfony中的上传流程 
        
        在symfony框架中，使用UploadedFile类来管理文件上传。通过访问 `$request->files` 来查看上传文件的基本信息。
        下图是打印的相关信息：

        ![](image/symfony_upload_file.png);

        UploadedFile类提供了方法来获取上传文件的基本信息：
          - `getExtension()` 
            获取源文件扩展名
          - `getClientSize()`  
            获取源文件大小
          - `getClientOriginalName()`  
            获取源文件名
          - `guessExtension()`  
            获取MIME扩展

        使用`move()`方法来移动文件

        在symfony中可以创建一个uploadFile类来集中控制文件上传的过程，在通过在服务中注册，便可直接在controller中获取该类并且使用该类。

        也可以选择在直接创建一个监听器，但与文件上传的字段被持久化后，自动触发该服务便可省去在controller中使用该服务的过程。详情可查看：  
        [uploadFile](http://www.symfonychina.com/doc/current/controller/upload_file.html)