from distutils.debug import DEBUG


class Config:

    """
   Parent class to define configuration objects
    """


class DevConfig(Config):

    DEBUG =True


class ProdConfig(Config):

    pass

config_options = {
    'development':DevConfig,
    'production': ProdConfig
}